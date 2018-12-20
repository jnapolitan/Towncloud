json.extract! user, :id, :username, :location
json.avatarUrl url_for(user.avatar)
