using Newtonsoft.Json;
using BaiTap2.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BaiTap2.Controllers
{
    public class DiemController : Controller
    {
        // GET: Diem
        public ActionResult Index()
        {
            List<Diem> lst = GetData();
            ViewData["lstDiem"] = lst;
            return View();
        }

        public List<Diem> GetData()
        {
            List<Diem> lst = new List<Diem>();
            using (StreamReader r = new StreamReader(Server.MapPath("~/Data.json")))
            {
                var json = r.ReadToEnd();
                lst = JsonConvert.DeserializeObject<List<Diem>>(json);
            }
            return lst;
        }
    }
}