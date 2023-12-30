package service

import com.google.inject.ImplementedBy
import dao.PlacesDAO
import models.Place

import javax.inject._
import scala.concurrent.Future

@ImplementedBy(classOf[PlacesServiceImpl])
trait PlacesService:
  def addPlace(place: Place): Future[_]
  def getPlaces(): Future[Seq[Place]]

@Singleton
class PlacesServiceImpl @Inject()(placesDAO: PlacesDAO) extends PlacesService {
  override def addPlace(place: Place): Future[_] =
    placesDAO.addPlace(place)

  override def getPlaces(): Future[Seq[Place]] =
    placesDAO.getPlaces()
}
