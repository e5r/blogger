using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace E5R.Blogger.Web.Api.Controllers
{
    [Route("/api/hello")]
    public class HelloController
    {
        public IEnumerable<string> Get()
        {
            return new List<string>()
            {
                "Hello world!",
                "Olá mundo!"
            };
        }
    }
}