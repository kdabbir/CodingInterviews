#Debounce implementation

Debouncing makes it so a function can only be executed after a certain amount of time since it was last invoked. For example, “only execute this function if it has been 1000 milliseconds since it was last invoked.” 

A common use case for debouncing is in search bars. We don’t want to make expensive http requests while the user is still typing their query, so we debounce the requesting function and only invoke it once the user has stopped typing.