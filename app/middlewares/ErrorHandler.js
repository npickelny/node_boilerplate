
class ErrorHandler {
  static handle(err, req, res, next) {
    switch (err.name) {
      case 'UnauthorizedError':
        res.status(401).json({message: 'Invalid auth token'})
        break
      case 'UserNotFoundError':
        res.status(401).json({message: 'Invalid auth token'})
        break
      case 'InvalidPermissionsError':
        res.status(403).json({message: 'Unauthorized'})
        break
      default:
        logger.error('Unknown error', err)
        res.status(500).send(err.stack)
        break
    }
  }
}
  
module.exports = ErrorHandler
