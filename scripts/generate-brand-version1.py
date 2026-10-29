#!/usr/bin/env python3
"""Build the approved Estaba en Lisboa v1 brand as real outlined SVG + raster.

One-time/repeatable asset generation. Requires:
  python (fonttools + brotli), Inkscape and ImageMagick.
The bundled Playfair font is used only to trace paths; exported SVG files
contain paths, so browsers, email clients and Google do not need that font.
Run from the repository root: python scripts/generate-brand-version1.py

All generated outputs are committed. This is not part of the production build.
"""
from __future__ import annotations

from pathlib import Path
import subprocess
import tempfile
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
BRAND = PUBLIC / "brand"
BRAND.mkdir(parents=True, exist_ok=True)

NAVY = "#1A2B4A"
CREAM = "#F5EFE6"
TERRACOTTA = "#B8472E"
BLACK = "#171717"
FONT = ROOT / "src/fonts/playfair-latin.woff2"


def font_weight(weight: int):
    font = TTFont(FONT)
    return instantiateVariableFont(font, {"wght": weight}, inplace=True)


REGULAR = font_weight(400)
BOLD = font_weight(770)


def width(font, string: str, size: float) -> float:
    cmap = font.getBestCmap()
    upm = font["head"].unitsPerEm
    return sum(font["hmtx"][cmap[ord(c)]][0] for c in string) * size / upm


def outlined(font, string: str, size: float, left: float, baseline: float, fill: str) -> str:
    cmap = font.getBestCmap()
    glyphset = font.getGlyphSet()
    scale = size / font["head"].unitsPerEm
    fragments = []
    cursor = left
    for char in string:
        name = cmap[ord(char)]
        pen = SVGPathPen(glyphset)
        glyphset[name].draw(pen)
        commands = pen.getCommands()
        if commands:
            fragments.append(
                f'<path d="{commands}" fill="{fill}" '
                f'transform="translate({cursor:.3f} {baseline:.3f}) scale({scale:.8f} {-scale:.8f})"/>'
            )
        cursor += font["hmtx"][name][0] * scale
    return "\n".join(fragments)


def svg(body: str, w: int, h: int, title: str = "Estaba en Lisboa") -> str:
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" '
        f'viewBox="0 0 {w} {h}" role="img" aria-label="{title}">'
        f'<title>{title}</title>{body}</svg>\n'
    )


# Exact v1 proportions, retaining the distinct orange disk and Bodoni/Playfair silhouette.
main_size = 252
main_width = width(BOLD, "Lisboa.", main_size)
main_x = (1200 - main_width) / 2 - 8
main_baseline = 404
phrase_size = 88
phrase_width = width(REGULAR, "estaba en", phrase_size)
phrase_x = main_x + main_width * 0.48 - phrase_width / 2
phrase_baseline = 159
# Disk behind the terminal a and full stop, in the approved terracotta.
disc_x = main_x + main_width - 109
disc_y = 299
disc_r = 111


def primary(color: str = NAVY, disk: str = TERRACOTTA) -> str:
    disk_element = f'<circle cx="{disc_x:.2f}" cy="{disc_y}" r="{disc_r}" fill="{disk}"/>' if disk else ""
    shapes = "\n".join(
        [disk_element,
         outlined(REGULAR, "estaba en", phrase_size, phrase_x, phrase_baseline, color),
         outlined(BOLD, "Lisboa.", main_size, main_x, main_baseline, color)]
    )
    return svg(shapes, 1200, 500)


(PUBLIC / "logo.svg").write_text(primary(), encoding="utf-8")
(BRAND / "logo-v1-inverso.svg").write_text(primary(CREAM, TERRACOTTA), encoding="utf-8")
(BRAND / "logo-v1-monocromo.svg").write_text(primary(BLACK, None), encoding="utf-8")

# Single-line editorial lockup, useful for narrow hero banners or print.
h_size = 182
h_width = width(BOLD, "Lisboa.", h_size)
small_size = 65
small_width = width(REGULAR, "estaba en", small_size)
small_x = 58
big_x = small_x + small_width + 39
h_disk_x = big_x + h_width - 62
horizontal = "\n".join([
    f'<circle cx="{h_disk_x:.2f}" cy="204" r="78" fill="{TERRACOTTA}"/>',
    outlined(REGULAR, "estaba en", small_size, small_x, 227, NAVY),
    outlined(BOLD, "Lisboa.", h_size, big_x, 259, NAVY),
])
(BRAND / "logo-v1-horizontal.svg").write_text(svg(horizontal, 1320, 340), encoding="utf-8")

# Circular mark v1: consistent with the original dot and very clear at 16px.
mark_size = 350
mark_width = width(BOLD, "L.", mark_size)
mark_x = (512 - mark_width) / 2
mark = "\n".join([
    f'<circle cx="256" cy="256" r="237" fill="{TERRACOTTA}"/>',
    outlined(BOLD, "L.", mark_size, mark_x, 375, CREAM),
])
(BRAND / "logo-v1-monograma.svg").write_text(svg(mark, 512, 512, "Estaba en Lisboa — L."), encoding="utf-8")

def run(*args):
    subprocess.run(args, cwd=ROOT, check=True, stdout=subprocess.DEVNULL)


def raster(source: Path, output: Path, width_px: int):
    run("inkscape", str(source), "--export-filename", str(output),
        "--export-width", str(width_px), "--export-background-opacity=0")


raster(PUBLIC / "logo.svg", PUBLIC / "logo.png", 1200)
raster(BRAND / "logo-v1-horizontal.svg", BRAND / "logo-v1-horizontal.png", 1800)
raster(BRAND / "logo-v1-inverso.svg", BRAND / "logo-v1-inverso.png", 1200)
raster(BRAND / "logo-v1-monograma.svg", PUBLIC / "icon-192.png", 192)
raster(BRAND / "logo-v1-monograma.svg", PUBLIC / "icon-512.png", 512)
run("convert", "-size", "180x180", f"xc:{NAVY}", str(PUBLIC / "icon-512.png"),
    "-resize", "180x180", "-gravity", "center", "-composite",
    str(PUBLIC / "apple-touch-icon.png"))

with tempfile.TemporaryDirectory(prefix="eel-v1-") as tmp:
    sizes = [16, 32, 48, 64]
    images = []
    for size in sizes:
        target = Path(tmp) / f"icon-{size}.png"
        raster(BRAND / "logo-v1-monograma.svg", target, size)
        images.append(str(target))
    run("convert", *images, str(ROOT / "src/app/favicon.ico"))

# Preserve the photographic editorial OG card and update its previous logo area.
# Original photo/text geometry was approved previously; other card content stays.
og = PUBLIC / "og-default.jpg"
if og.exists():
    with tempfile.TemporaryDirectory(prefix="eel-og-") as tmp:
        cleaned = Path(tmp) / "cleaned.png"
        scaled = Path(tmp) / "wordmark.png"
        run("convert", str(og), "-fill", CREAM, "-draw",
            "rectangle 60,116 555,286", str(cleaned))
        run("convert", str(PUBLIC / "logo.png"), "-resize", "405x",
            str(scaled))
        run("convert", str(cleaned), str(scaled), "-geometry", "+72+112",
            "-composite", "-quality", "91", str(og))

print(f"Master v1: {PUBLIC / 'logo.svg'}")
print(f"Raster: {PUBLIC / 'logo.png'} (1200px)")
print(f"Brand variants: {BRAND}")
print("Google/browser icons: favicon.ico, icon-192/512, apple-touch-icon")
print("Social sharing: og-default.jpg")
print(f"Dimensions: main text={main_width:.0f}px at x={main_x:.0f}, disc={disc_x:.0f}")
