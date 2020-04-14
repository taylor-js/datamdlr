#pragma checksum "D:\covid19datamodeler\CvdMdlr\CvdMdlr\Pages\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "2452975fdc893dcabba607c483160ecbd45d9384"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(CvdMdlr.Pages.Pages_Index), @"mvc.1.0.razor-page", @"/Pages/Index.cshtml")]
namespace CvdMdlr.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "D:\covid19datamodeler\CvdMdlr\CvdMdlr\Pages\_ViewImports.cshtml"
using CvdMdlr;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"2452975fdc893dcabba607c483160ecbd45d9384", @"/Pages/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"72ccf431b4366150e6a5557fa28d60ca468d3142", @"/Pages/_ViewImports.cshtml")]
    public class Pages_Index : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 3 "D:\covid19datamodeler\CvdMdlr\CvdMdlr\Pages\Index.cshtml"
  
    ViewData["Title"] = "Home page";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<!--BODY-->
<div id=""main-wrapper"">
    <div class=""wrapper style1"">
        <h2 class=""text-center"">Graphs of Affected</h2>
        <p class=""text-center"">Groups: Tested negative, recovered, tested positive, hospitalized, death and total. Charts and tables are automatically updated daily.</p><br /><br />

        <div class=""container"" >
");
            WriteLiteral(@"            <div id=""visalllog"" style=""width:100%;""></div>
        </div>

        <div class=""inner container"">
            <br />
            <div style=""width:100%;"" id=""visalllog""></div>
            <div class="" text-center"">
                <div class=""cards row justify-content-md-center"">
                    <div class=""card vis1 col-12-small col-6-medium col-4-large"">
                        <div id=""vis1""></div>
                    </div>
                    <div class=""card vis2 col-12-small col-6-medium col-4-large"">
                        <div id=""vis2""></div>
                    </div>
                    <div class=""card vis3 col-12-small col-6-medium col-4-large"">
                        <div id=""vis3""></div>
                    </div>
                    <div class=""card vis4 col-12-small col-6-medium col-4-large"">
                        <div id=""vis4""></div>
                    </div>
                    <div class=""card vis5 col-12-small col-6-medium col-4-large"">
     ");
            WriteLiteral(@"                   <div id=""vis5""></div>
                    </div>
                    <div class=""card vis6 col-12-small col-6-medium col-4-large"">
                        <div id=""vis6""></div>
                    </div>
                </div>
            </div>
            <br />
            <div class="" text-center"">
                <div class=""cards row justify-content-md-center"">
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-AL""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-AK""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-AZ""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-AR""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div");
            WriteLiteral(@" style=""width:100%;"" id=""vispie-CA""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-CO""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-CT""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-DE""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-FL""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-GA""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-HI""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-ID""></div></div>
                    <div clas");
            WriteLiteral(@"s=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-IL""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-IN""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-IA""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-KS""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-KY""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-LA""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-ME""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id");
            WriteLiteral(@"=""vispie-MD""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-MA""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-MI""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-MN""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-MS""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-MO""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-MT""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-NE""></div></div>
                    <div class=""card vis6 col-12-sma");
            WriteLiteral(@"ll col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-NV""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-NH""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-NJ""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-NM""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-NY""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-NC""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-ND""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-OH""></div></di");
            WriteLiteral(@"v>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-OK""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-OR""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-PA""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-RI""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-SC""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-SD""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-TN""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-l");
            WriteLiteral(@"arge""><div style=""width:100%;"" id=""vispie-TX""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-UT""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-VT""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-VA""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-WA""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-WV""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-WI""></div></div>
                    <div class=""card vis6 col-12-small col-4-medium col-4-large""><div style=""width:100%;"" id=""vispie-WY""></div></div>
");
            WriteLiteral(@"
                </div>
            </div>
            <br />

            <h2 class=""text-center"">Table of all Affected</h2>

            <table id=""groupstable"" class=""table table-striped table-bordered nowrap"" style=""width:100%"">
                <thead>
                    <tr>
                        <th>checkTimeEt</th>
                        <th>state/territory</th>
                        <th>negative</th>
                        <th>recovered</th>
                        <th>positive</th>
                        <th>hospitalized</th>
                        <th>death</th>
                        <th>total</th>
                    </tr>
                </thead>
            </table>
            <br />

");
            WriteLiteral(@"
            <br /><br />

            <br />
            <h2 class=""text-center"">State Resources</h2>
            <table id=""infotable"" class=""table table-striped table-bordered nowrap"" style=""width:100%"">
                <thead>
                    <tr>
                        <th>state</th>
                        <th>Current Website</th>
                        <th>Secondary Website</th>
                        <th>Twitter</th>
                    </tr>
                </thead>
            </table>
            <br />

            <br />

        </div>
    </div>
</div>




<!--BODY-->
<!-- vis1 -->
");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IndexModel> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<IndexModel> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<IndexModel>)PageContext?.ViewData;
        public IndexModel Model => ViewData.Model;
    }
}
#pragma warning restore 1591
