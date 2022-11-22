using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace GetResumeCounter
{
    public class Counter
    {
        [JsonProperty(PropertyName="id")]
        public string Id { get; set; }
        [JsonProperty(PropertyName ="count")]
        public int Count { get; set; }
    }
}
