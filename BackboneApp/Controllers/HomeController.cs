using System.Web.Mvc;

namespace BackboneApp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return PartialView();
        }
    }
}