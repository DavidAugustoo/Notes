import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Editor } from '../components/Editor'
import { ToC } from '../components/ToC'

export function Document() {
  const { id } = useParams<{ id: string }>()

  const { data, isFetching } = useQuery(['document'], async () => {
    const response = await window.api.fetchDocument({ id: id! })

    return response.data
  })

  const initialContent = useMemo(() => {
    if (data) {
      return `<h1>${data.title}</h1>${data.content ?? '<p></p>'}`
    }

    return ''
  }, [data])

  return (
    <main className="flex-1 flex py-12 px-10 gap-8">
      <aside className="hidden lg:block sticky top-0">
        <span className="text-notes-300 font-semibold text-xs">TABLE OF CONTENT</span>

        <ToC.Root>
          <ToC.Link>Back-end</ToC.Link>
          <ToC.Section>Banco de dados</ToC.Section>
          <ToC.Section>Autenticação</ToC.Section>
        </ToC.Root>
      </aside>

      <section className="flex-1 flex flex-col items-content">
        {!isFetching && data && <Editor content={initialContent} />}
      </section>
    </main>
  )
}
