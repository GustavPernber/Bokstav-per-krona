def dbConnection()
    db=SQLite3::Database.new('db/db.db')
    db.results_as_hash=true
    return db
end

def drinksLimited(pagenum)
    db=dbConnection()

    offset=10*pagenum
    limit=2

    result=db.execute("SELECT * FROM products ORDER BY apk DESC LIMIT ? OFFSET ?", limit, offset)

    return result
end