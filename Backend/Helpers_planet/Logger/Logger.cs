using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Web;

namespace Helpers_planet.Logger
{
    public class Logger

    {
        private static Logger log = new Logger();   
        StreamWriter writer = null;
        FileStream fileStream = null;
        string filepath1 = "";
        string filepath2 = "";
        private  Logger() {
            filepath1 = ConfigurationManager.AppSettings["filepath"].ToString();
            filepath2 = ConfigurationManager.AppSettings["filepathforExcep"].ToString();

        }

        public static Logger Currrent { get { return log; } }

        public void CreateLog(string message, string type)
        {
           if(type == "Exception")
            {
                if (File.Exists(filepath2))
                {
                    fileStream = new FileStream(filepath2, FileMode.Append, FileAccess.Write);
                }
                else
                {
                    fileStream = new FileStream(filepath2, FileMode.OpenOrCreate, FileAccess.Write);
                }
            }
           else
            {
                if (File.Exists(filepath1))
                {
                    fileStream = new FileStream(filepath1, FileMode.Append, FileAccess.Write);
                }
                else
                {
                    fileStream = new FileStream(filepath1, FileMode.OpenOrCreate, FileAccess.Write);
                }
            }

            writer = new StreamWriter(fileStream);
            writer.WriteLine("The log is made on {0} : {1}",DateTime.Now.ToString(), message);
            writer.Close();
            fileStream.Close();
            writer = null;  
            fileStream = null;  
        }

    }
}