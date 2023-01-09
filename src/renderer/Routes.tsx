import { Router, Route } from 'electron-router-dom'
import { Blank } from './src/pages/blank'
import { Document } from './src/pages/documents'
import { Default } from './src/pages/layouts/default'

export function Routes() {
  return (
    <Router
      main={
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Blank />} />
          <Route path="/document/:id" element={<Document />} />
        </Route>
      }
    />
  )
}
