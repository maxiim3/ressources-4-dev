import {Header} from '@/app/header.client'
import {T_Category, T_Ressource, T_Tag} from '@/app/types'

export default function Home() {
   return (
      <>
         <Header />

         <nav className={'w-48 h-full bg-base-200 sticky left-0 top-0 py-12 px-8 prose  space-y-8'}>
            <h2 className={'text-center font-light text-xl '}>Categories</h2>

            <ul className={'flex flex-col items-center justify-center gap-2'}>
               {/*   List of categories */}
               {ressources.map(ressource => (
                  <li className={'hover:cursor-pointer'} key={ressource.title}><a
                     href={`/#${ressource.title}`}>{ressource.title}</a></li>
               ))}
            </ul>

         </nav>

         <main className={' w-screen h-screen'}>
            {/*   Display filtered items */}

         </main>
      </>
   )
}

class Tag {
   label: T_Tag['label']

   constructor({label}: T_Tag) {
      this.label = label
   }
}

class Category {
   label: T_Category['label']
   tags: T_Category['tags']

   constructor({label, tags}: T_Category) {
      this.label = label
      this.tags = tags
   }
}

class Ressource {
   title: T_Ressource['title']
   categories: T_Category[]
   description: T_Ressource['description']
   tags?: T_Tag[]

   constructor({title, description, tags, categories}: T_Ressource) {
      this.title = title
      this.description = description
      this.tags = tags
      this.categories = categories
   }
}

// Generate bellow an array of 10 implementation of Ressources
const ressources: Ressource[] = Array.from({length: 10}, (_, i) => i).map(i => {
   return new Ressource({
      title: `lorem ressource ${i}`,
      description: `lorem description ${i}`,
      tags: [new Tag({label: `lorem tag ${i}`}), new Tag({label: `lorem tag ${i + 1}`})],
      categories: [
         new Category({
               label: `lorem category ${i}`,
               tags: [new Tag({label: `lorem tag ${i}`}), new Tag({label: `lorem tag ${i + 1}`})],
            },
         ),
      ],
   })
})
