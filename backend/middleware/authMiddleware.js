import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');

      return next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('not authorized tolken failed');
    }
  }

  if (!tolken) {
    res.status(401);
    throw new Error('not authorized and no token !');
  }
});

export { protect };
