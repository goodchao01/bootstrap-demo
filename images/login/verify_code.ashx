<%@ WebHandler Language="C#" Class="VCode" %>

using System;
using System.Web;
using System.Drawing;
public class VCode : IHttpHandler, System.Web.SessionState.IRequiresSessionState
{
  private const string chars = "0123456789";
  private const string name = "vCode";

  public void ProcessRequest(HttpContext context)
  {
    HttpResponse Response = context.Response;
    HttpRequest Request = context.Request;
    Response.Cache.SetCacheability(HttpCacheability.NoCache);
    string vCode = string.Empty;
    Random rand = new Random();
    Bitmap imgCode = new Bitmap(75, 35);
    Graphics gImgCode = Graphics.FromImage(imgCode);
    gImgCode.Clear(Color.White);
    for (int i = 0; i < 4; i++)
    {
      Bitmap imgChar = new Bitmap(30, 35);
      Graphics gImgChar = Graphics.FromImage(imgChar);
      gImgChar.Clear(Color.Transparent);
      gImgChar.RotateTransform((float)rand.Next(-20, 21));
      vCode += chars[rand.Next(chars.Length)];
      gImgChar.DrawString(vCode[i].ToString(), new Font("Arial", 20), new SolidBrush(Color.FromArgb(rand.Next(200), rand.Next(200), rand.Next(200))), 5, 5);
      gImgCode.DrawImageUnscaled(imgChar, i * 15, 0);
      //gImgCode.DrawLine(new Pen(Color.FromArgb(rand.Next(250), rand.Next(250), rand.Next(250)), rand.Next(1, 3)), rand.Next(0, 75), rand.Next(0, 35), rand.Next(0, 75), rand.Next(0, 35));
      gImgChar.Dispose();
      imgChar.Dispose();
    }
    context.Session.Add(name, vCode);
    gImgCode.Dispose();
    Response.ClearContent();
    Response.ContentType = "image/JPEG";
    System.IO.MemoryStream ms = new System.IO.MemoryStream();
    imgCode.Save(ms, System.Drawing.Imaging.ImageFormat.Jpeg);
    Response.BinaryWrite(ms.GetBuffer());
    ms.Close();
    imgCode.Dispose();
    Response.End();
  }

  public bool IsReusable { get { return false; } }

}
