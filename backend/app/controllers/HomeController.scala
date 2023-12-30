package controllers

import models.{Place, PlacesTable}
import models.Place._
import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import play.api.libs.json.Json
import play.api.mvc._
import service.PlacesService
import slick.jdbc.JdbcProfile
import slick.jdbc.PostgresProfile.api._
import slick.lifted.TableQuery.Extract

import javax.inject._
import scala.concurrent.{ExecutionContext, Future}

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(placesService: PlacesService, controllerComponents: ControllerComponents)(implicit ec: ExecutionContext) extends AbstractController(controllerComponents) {

  def index(): Action[AnyContent] = Action.async { implicit request: Request[AnyContent] =>
    Future.successful(Ok("<h1>Welcome to Play!</h1>").as("text/html"))
  }

  def insertPlace(): Action[Place] = Action.async(parse.json[Place]) { implicit request: Request[Place] =>
    placesService addPlace request.body map { _ =>
      Ok("<h1>Cam</h1>").as("text/html")
    }
  }

  def getPlaces(): Action[AnyContent] = Action.async { _ =>
    placesService.getPlaces().map { places =>
      Ok(Json.toJson(places))
    }
  }

}
