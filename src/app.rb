require 'sinatra'
require 'slim'
require 'sqlite3'
require 'base64'
require 'bcrypt'
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




get('/api')do
    content_type :json
    return books.to_json
end
