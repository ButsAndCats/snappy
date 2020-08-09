import * as React from "react"
import {
  useParams
} from "react-router-dom"

export const Article: React.FC = () => {
  const { blogHandle, articleHandle } = useParams();
  return (
    <>
      <p>{`Blog: ${blogHandle}`}</p>
      <p>{`Article: ${articleHandle}`}</p>
    </>
  )
}