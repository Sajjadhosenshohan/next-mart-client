
export type TCategory = {
    _id: string
    name: string
    description: string
    parent?: any
    isActive: boolean
    createdBy: string
    icon: string
    slug: string
    createdAt: string
    updatedAt: string
    children?: any[]
  }
  export type TMeta =  {
    page: number
    limit: number
    total: number
    totalPage: number
  }
  