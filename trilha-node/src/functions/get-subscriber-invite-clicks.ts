import { redis } from '../redis/client'

interface GetSubscriberInviteClicksParams {
  subscriberId: string
}

export async function getSubscriberInviteClicks({
  subscriberId,
}: GetSubscriberInviteClicksParams) {
  const accessCount = await redis.hget('referral:access-count', subscriberId)

  return { count: accessCount ? Number.parseInt(accessCount) : 0 }
}