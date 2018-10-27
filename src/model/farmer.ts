import { Chip } from '@/model/chip'
import { Hat } from '@/model/hat'
import { Leek } from '@/model/leek'
import { Potion } from '@/model/potion'
import { Weapon } from '@/model/weapon'

class Farmer {
	public id!: number
	public name!: string
	public habs!: number
	public crystals!: number
	public banned!: boolean
	public deleted!: boolean
	public tournaments!: any[]
	public trophies!: number
	public leeks!: {[key: number]: Leek}
	public weapons!: Weapon[]
	public potions!: Potion[]
	public avatar_changed!: number
	public tournament!: any
	public in_garden!: boolean
	public talent_more!: number
	public country!: string
	public warnings!: any[]
	public candidacy!: any
	public website!: string
	public github!: string
	public hats!: Hat[]
	public grade!: string
	public muted!: boolean
	public fights!: number
	public chips!: Chip[]
	public didactitiel_seen!: boolean
	public last_connection!: number
}
export { Farmer }
