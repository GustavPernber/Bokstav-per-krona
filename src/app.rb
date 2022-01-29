require 'sinatra'
require 'slim'
require 'sqlite3'
require 'base64'
require 'bcrypt'


get('/')do
    slim(:index)
end