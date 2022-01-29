require 'JSON'
# require 'sinatra'
require'httparty'
require 'net/http' 
require 'uri'   
require 'http'

titles=[]
total=0
i=1
level1="Vin" 
level2="Vin"


response = HTTP.use({
  normalize_uri: {
    normalizer: ->(uri) { HTTP::URI.parse(uri) },
  },
}).headers("Ocp-Apim-Subscription-Key" => "cfc702aed3094c86b92d6d4ff7a54c84").get("https://api-extern.systembolaget.se/sb-api-ecommerce/v1/productsearch/search?categoryLevel1=Vin&categoryLevel2=Vitt&page=1")
pp response.parse["products"]


# uri = URI('https://api-extern.systembolaget.se/sb-api-ecommerce/v1/productsearch/search?categoryLevel1=Vin')
# # params = { :categoryLevel1 => "Vin"}
# uri.query = URI.encode_www_form(params)

# res = Net::HTTP.get_response(uri)
# puts res.body if res.is_a?(Net::HTTPSuccess)



# url="https://api-extern.systembolaget.se/sb-api-ecommerce/v1/productsearch/search?categoryLevel1=#{level1}&categoryLevel2=#{level2}&page=#{i}"

# uri = URI(url)
# req = Net::HTTP::Get.new(uri)
# req["Ocp-Apim-Subscription-Key"] = "cfc702aed3094c86b92d6d4ff7a54c84"

# res = Net::HTTP.start(uri.hostname, uri.port) {|http|
#   http.request(req)
# }

# uri = URI('https://api-extern.systembolaget.se/sb-api-ecommerce/v1/productsearch/search')
# params = { :categoryLevel1 => "Vin"}
# uri.query = URI.encode_www_form(params)
# req = Net::HTTP::Get.new(uri)
# req["Ocp-Apim-Subscription-Key"] = "cfc702aed3094c86b92d6d4ff7a54c84"

# res = Net::HTTP.start(uri.hostname, uri.port) {|http|
#   http.request(req)
# }

# # res = Net::HTTP.get_response(uri)
# puts res.body if res.is_a?(Net::HTTPSuccess)


# puts res.body



# while true
    # url = "https://api-extern.systembolaget.se/sb-api-ecommerce/v1/productsearch/search?categoryLevel1=#{level1}&categoryLevel2=#{level2}&page=#{i}"
    # headers = {
    #     "Ocp-Apim-Subscription-Key": "cfc702aed3094c86b92d6d4ff7a54c84"
    # }
    # response = HTTParty.get(url, headers: headers)
    # body= JSON.parse(response.body)

    
    # productTitle="#{body["products"][0]["productNameBold"]} - #{body["products"][0]["productNameThin"]}"
    # titles<<productTitle
    
    # p productTitle
    # total+=body["products"].length
    # p total
    # begin
        
    #     body= JSON.parse(response.body)
    #     begin
    #          p body["products"].length
    #          p "i: #{i}"
    #     rescue => exception
    #         p "error #{i}"
    #     end
    # rescue => exception
    #     p "ERROR2 #{i}"
    # end


    

#    i+=1
# end
