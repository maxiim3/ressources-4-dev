import {ReactNode} from 'react'
import {z} from 'zod'
import {Z_Category, Z_Ressource, Z_Tag} from '@/app/zod.schemas'

export type T_ClassName = {
   className?: string
}
export type T_Children = {
   children: ReactNode
}

export type T_Tag = z.infer<typeof Z_Tag>
export type T_Ressource = z.infer<typeof Z_Ressource>
export type T_Category = z.infer<typeof Z_Category>

