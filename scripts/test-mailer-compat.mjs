import assert from 'node:assert/strict';
import test from 'node:test';
import nodemailer from 'nodemailer';

// Exercise the sendMail API used by the SMTP fallbacks without SMTP credentials
// or network delivery. These fixtures cover message shapes, not the API routes.
const sender = 'sender@example.invalid';
const visitor = 'visitor@example.invalid';
const owner = 'owner@example.invalid';
const html = '<p>Offline mail compatibility check.</p>';
const text = 'Offline mail compatibility check.';
const messages = [
  { name: 'contact notification', to: owner, replyTo: visitor, html },
  { name: 'contact confirmation', to: visitor, html, text },
  { name: 'planning notification', to: owner, replyTo: visitor, html, text },
  { name: 'planning confirmation', to: visitor, html, text },
  { name: 'subscriber welcome', to: visitor, html },
];

for (const message of messages) {
  test(`SMTP fallback message shape: ${message.name}`, async () => {
    const { name, ...content } = message;
    const transport = nodemailer.createTransport({
      streamTransport: true,
      buffer: true,
      newline: 'unix',
      disableFileAccess: true,
      disableUrlAccess: true,
    });
    try {
      const result = await transport.sendMail({
        ...content,
        from: `"Estaba en Lisboa" <${sender}>`,
        subject: `Lisboa: ${name} - Jos\u00e9`,
      });
      assert.deepEqual(result.envelope, { from: sender, to: [content.to] });
      assert.ok(result.messageId);
      assert.ok(Buffer.isBuffer(result.message));
      const mime = result.message.toString('utf8');
      assert.match(mime, /MIME-Version: 1\.0/);
      assert.match(mime, /Subject: =\?UTF-8\?/i);
      assert.ok(mime.includes(html));
      if (content.text) {
        assert.match(mime, /Content-Type: multipart\/alternative/);
        assert.match(mime, /Content-Type: text\/plain/);
        assert.match(mime, /Content-Type: text\/html/);
      }
      if (content.replyTo) assert.ok(mime.includes(`Reply-To: ${visitor}`));
      else assert.doesNotMatch(mime, /^Reply-To:/m);
    } finally {
      transport.close();
    }
  });
}
