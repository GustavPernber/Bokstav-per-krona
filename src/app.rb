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




get('/api/drinksLimited/page=:page')do
    pageNum=params[:page].to_i
    p pageNum
    content_type :json
    drinks=drinksLimited(pageNum)
    return drinks.to_json
end
