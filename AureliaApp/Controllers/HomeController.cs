using System.Web.Mvc;

namespace AureliaApp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return PartialView();
        }
    }
}