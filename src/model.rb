def dbConnection()
    db=SQLite3::Database.new('db/db.db')
    db.results_as_hash=true
    return db
end

def drinks30()
    db=dbConnection()
    result=db.execute("SELECT * FROM products LIMIT 40")

    return result
end