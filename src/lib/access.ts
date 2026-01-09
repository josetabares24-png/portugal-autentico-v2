import { supabase } from './supabase'

export async function hasAccess(userId: string, guideId: string): Promise<boolean> {
  if (!userId) return false

  try {
    const { data, error } = await supabase
      .from('purchases')
      .select('id')
      .eq('user_id', userId)
      .eq('guide_id', guideId)
      .maybeSingle()

    if (error) {
      console.error('Error checking access:', error)
      return false
    }

    return !!data
  } catch (error) {
    console.error('Error in hasAccess:', error)
    return false
  }
}

export async function hasPackCompleto(userId: string): Promise<boolean> {
  if (!userId) return false

  try {
    const { data, error } = await supabase
      .from('purchases')
      .select('id')
      .eq('user_id', userId)
      .eq('guide_id', 'pack-completo')
      .maybeSingle()

    if (error) {
      console.error('Error checking pack access:', error)
      return false
    }

    return !!data
  } catch (error) {
    console.error('Error in hasPackCompleto:', error)
    return false
  }
}

export async function getUserPurchases(userId: string): Promise<string[]> {
  if (!userId) return []

  try {
    const { data, error } = await supabase
      .from('purchases')
      .select('guide_id')
      .eq('user_id', userId)

    if (error) {
      console.error('Error getting purchases:', error)
      return []
    }

    return data?.map(p => p.guide_id) || []
  } catch (error) {
    console.error('Error in getUserPurchases:', error)
    return []
  }
}

export async function registerPurchase(
  userId: string,
  guideId: string,
  amount: number,
  stripePaymentId: string
): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('purchases')
      .insert({
        user_id: userId,
        guide_id: guideId,
        amount,
        stripe_payment_id: stripePaymentId,
        purchase_date: new Date().toISOString()
      })

    if (error) {
      console.error('Error registering purchase:', error)
      return false
    }

    return true
  } catch (error) {
    console.error('Error in registerPurchase:', error)
    return false
  }
}

export async function hasAccessToGuide(userId: string, guideId: string): Promise<boolean> {
  if (!userId) return false

  const hasPack = await hasPackCompleto(userId)
  if (hasPack) return true

  return await hasAccess(userId, guideId)
}
