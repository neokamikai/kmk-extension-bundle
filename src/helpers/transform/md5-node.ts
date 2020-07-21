import crypto from 'crypto';

export default (input: string)=> crypto.createHash('md5').update(input).digest('hex');