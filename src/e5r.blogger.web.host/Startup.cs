using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;

namespace E5R.Blogger.Web.Host
{
    public class Startup
    {
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseStaticFiles();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
        }
    }
}
