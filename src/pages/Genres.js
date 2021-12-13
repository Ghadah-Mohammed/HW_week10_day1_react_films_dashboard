// import { Button } from "react-bootstrap"
import { useContext } from "react"
import { Table } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"
import GenreCell from "../components/GenreCell"

function Genres() {
  const { genres } = useContext(FilmsContext)
  return (
    <Table bordered hover style={{ tableLayout: "fixed" }}>
      <thead>
        <tr>
          <th style={{ width: "9%" }}>#</th>
          <th style={{ width: "18%" }}>Title</th>
          <th style={{ width: "18%" }}>Description</th>
          <th style={{ width: "18%" }}>Poster</th>
          <th style={{ width: "9%" }}>Rating</th>
          <th style={{ width: "36%" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {genres.map(genre => (
          <GenreCell key={genre._id} genre={genre} />
        ))}
      </tbody>
    </Table>
  )
}

export default Genres