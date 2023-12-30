package models

import play.api.libs.json.{Json, OFormat, Reads}
import slick.jdbc.PostgresProfile.api._
import slick.lifted.{ProvenShape, Tag}

class PlacesTable(tag: Tag) extends Table[Place](tag, "places") {

  def id: Rep[Option[Int]] = column[Option[Int]]("id", O.PrimaryKey, O.AutoInc)
  def name: Rep[String] = column[String]("name")
  def address: Rep[String] = column[String]("address")

  override def * = (id, name, address).mapTo[Place]
}

val places = TableQuery[PlacesTable]