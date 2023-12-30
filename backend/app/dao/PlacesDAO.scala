package dao

import com.google.inject.ImplementedBy
import models.Place._
import models.{Place, PlacesTable, places}
import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import play.api.libs.json.Json
import play.api.mvc._
import service.{PlacesService, PlacesServiceImpl}
import slick.jdbc.JdbcProfile
import slick.jdbc.PostgresProfile.api._
import slick.lifted.TableQuery.Extract

import javax.inject._
import scala.concurrent.{ExecutionContext, Future}

@ImplementedBy(classOf[PlacesDAOImpl])
trait PlacesDAO:
  def addPlace(place: Place): Future[_]
  def getPlaceById(id: Int): Future[Option[Place]]
  def getPlaces(): Future[Seq[Place]]


@Singleton
class PlacesDAOImpl @Inject()(protected val dbConfigProvider: DatabaseConfigProvider)(implicit ec: ExecutionContext) extends PlacesDAO with HasDatabaseConfigProvider[JdbcProfile]{

  override def addPlace(place: Place): Future[_] =
    dbConfig.db.run(places.insertOrUpdate(place))

  override def getPlaceById(id: Int): Future[Option[Place]] =
    dbConfig.db.run(places.filter(_.id === id).result.headOption)

  override def getPlaces(): Future[Seq[Place]] =
    dbConfig.db.run(places.result)
}
