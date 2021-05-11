let checkForRoles = (message, roles) =>
{
    let rolesFound = false;
    message.member.roles.cache.every(role => 
    {
        roleName = role.name;
        if (roles.includes(roleName))
        {
            rolesFound = true;
            return false; // Breaks from the '.every' loop.
        }
        return true;
    });

    return rolesFound;
};

let removeRoles = (message, rolesToRemove) =>
{
    if (checkForRoles(message, rolesToRemove))
    {
        message.member.roles.cache.forEach(role =>
        {
            if (rolesToRemove.includes(role.name))
            {
                message.member.roles.remove(role.id);
            }
        });
    }
};

module.exports = 
{
    checkForRoles, removeRoles,
}