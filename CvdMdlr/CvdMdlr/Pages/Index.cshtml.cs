using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace CvdMdlr.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }
        
        public void OnGet()
        {

        }
       
    }
    public class State : PageModel
    {

        public string StateID { get; set; }
        public string DivId { get; set; }

        public ActionResult ViewStates()
        {
            var sites = new List<State>()
            {
                new State(){ StateID = "AL", DivId = "vispie-AL" },
                new State(){ StateID = "AK", DivId = "vispie-AK" },
                new State(){ StateID = "AZ", DivId = "vispie-AZ" },
                new State(){ StateID = "AR", DivId = "vispie-AR" },
                new State(){ StateID = "CA", DivId = "vispie-CA" },
                new State(){ StateID = "CO", DivId = "vispie-CO" },
                new State(){ StateID = "CT", DivId = "vispie-CT" },
                new State(){ StateID = "DE", DivId = "vispie-DE" },
                new State(){ StateID = "FL", DivId = "vispie-FL" },
                new State(){ StateID = "GA", DivId = "vispie-GA" },
                new State(){ StateID = "HI", DivId = "vispie-HI" },
                new State(){ StateID = "ID", DivId = "vispie-ID" },
                new State(){ StateID = "IL", DivId = "vispie-IL" },
                new State(){ StateID = "IN", DivId = "vispie-IN" },
                new State(){ StateID = "IA", DivId = "vispie-IA" },
                new State(){ StateID = "KS", DivId = "vispie-KS" },
                new State(){ StateID = "KY", DivId = "vispie-KY" },
                new State(){ StateID = "LA", DivId = "vispie-LA" },
                new State(){ StateID = "ME", DivId = "vispie-ME" },
                new State(){ StateID = "MD", DivId = "vispie-MD" },
                new State(){ StateID = "MA", DivId = "vispie-MA" },
                new State(){ StateID = "MI", DivId = "vispie-MI" },
                new State(){ StateID = "MN", DivId = "vispie-MN" },
                new State(){ StateID = "MS", DivId = "vispie-MS" },
                new State(){ StateID = "MO", DivId = "vispie-MO" },
                new State(){ StateID = "MT", DivId = "vispie-MT" },
                new State(){ StateID = "NE", DivId = "vispie-NE" },
                new State(){ StateID = "NV", DivId = "vispie-NV" },
                new State(){ StateID = "NH", DivId = "vispie-NH" },
                new State(){ StateID = "NJ", DivId = "vispie-NJ" },
                new State(){ StateID = "NM", DivId = "vispie-NM" },
                new State(){ StateID = "NY", DivId = "vispie-NY" },
                new State(){ StateID = "NC", DivId = "vispie-NC" },
                new State(){ StateID = "ND", DivId = "vispie-ND" },
                new State(){ StateID = "OH", DivId = "vispie-OH" },
                new State(){ StateID = "OK", DivId = "vispie-OK" },
                new State(){ StateID = "OR", DivId = "vispie-OR" },
                new State(){ StateID = "PA", DivId = "vispie-PA" },
                new State(){ StateID = "RI", DivId = "vispie-RI" },
                new State(){ StateID = "SC", DivId = "vispie-SC" },
                new State(){ StateID = "SD", DivId = "vispie-SD" },
                new State(){ StateID = "TN", DivId = "vispie-TN" },
                new State(){ StateID = "TX", DivId = "vispie-TX" },
                new State(){ StateID = "UT", DivId = "vispie-UT" },
                new State(){ StateID = "VT", DivId = "vispie-VT" },
                new State(){ StateID = "VA", DivId = "vispie-VA" },
                new State(){ StateID = "WA", DivId = "vispie-WA" },
                new State(){ StateID = "WV", DivId = "vispie-WV" },
                new State(){ StateID = "WI", DivId = "vispie-WI" },
                new State(){ StateID = "WY", DivId = "vispie-WY" },
            };
            return View(sites);
        }
         
        public ActionResult View(List<State> sites)
        {
            throw new NotImplementedException();
        }

        public void OnGet()
        {

        }
    }
}
