package models

import play.api.libs.json.{Json, OFormat, Reads}
import slick.jdbc.PostgresProfile.api._
import slick.lifted.{ProvenShape, Tag}

case class Place(id: Option[Int], name: String, address: String)

object Place:
  implicit val placeFormat: OFormat[Place] = Json.format[Place]
  implicit val placeReader: Reads[Place] = Json.reads[Place]
