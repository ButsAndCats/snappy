import * as React from "react"
import {
  useParams
} from "react-router-dom"

export const CollectionTemplate: React.FC = () => {
  const { handle } = useParams();
  return (
    <p>{`Collection: ${handle}`}</p>
  )
}