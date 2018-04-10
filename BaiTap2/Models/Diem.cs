using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BaiTap2.Models
{
    public class Diem
    {
        public int Stt { get; set; }
        public string Name { get; set; }
        public int SoTin { get; set; }
        public string HK_DT { get; set; }
        public string HK_HP { get; set; }
        public double TongDiem { get; set; }
        public string DiemChu { get; set; }
    }
}