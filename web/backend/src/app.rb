require 'sinatra'
require 'slim'
require 'sqlite3'
require 'base64'
require 'bcrypt'

require_relative 'model.rb'

# require "rerun"

# set :default_content_type, :json

books=[
    {name:"lol", id:1},
    {name:"lol1", id:3},
    {name:"lol31", id:2},
]
get('/')do
    slim(:index)
end

get('/api/drinksLimited')do
    pageNum=params[:page].to_i

    priceMax=params[:priceMax].to_i
    priceMin=params[:priceMin].to_i

    alcMax=14
    alcMin=13

    queries=[
        {   column: "price",
            max: priceMax,
            min: priceMin
        },
        {   column: "alcPercentage",
            max: alcMax,
            min: alcMin
        },
        
    ]

    content_type :json
    drinks=drinksLimited(pageNum, queries)
    return drinks.to_json
end