import { CheckIn, Prisma } from '@prisma/client'

export interface CheckInsRepository {
  countByUserId(userId: string): Promise<number>
  findById(id: string): Promise<CheckIn | null>
  findManyByUserId(userId: string, page: number): Promise<CheckIn[]>
  findByUserIdOnDate(userId: string, date: Date): Promise<CheckIn | null>
  create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>
  save(checkIn: CheckIn): Promise<CheckIn>
}
