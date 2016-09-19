using Microsoft.AspNetCore.Mvc;

namespace ProjectTimeManager.Controllers.Web
{
    public class AppController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
