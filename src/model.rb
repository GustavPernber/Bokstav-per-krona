def dbConnection()
    db=SQLite3::Database.new('db/db.db')
    db.results_as_hash=true
    return db
end

def drinksLimited(pagenum, queries)
    db=dbConnection()

    offset=10*pagenum
    limit=2

    ranges="WHERE "
    params=[]

    queries.each_with_index do |column, i|
        string="#{column[:column]} BETWEEN ? AND ?"
        params<<column[:min]
        params<<column[:max]

        if i!=queries.length-1
            string+=" AND "
        end
        ranges+=string
    end

    dbQuery="SELECT * FROM products #{ranges} ORDER BY apk DESC LIMIT ? OFFSET ?"

    params<<limit
    params<<offset

    result=db.execute(dbQuery, params)


    return result
end