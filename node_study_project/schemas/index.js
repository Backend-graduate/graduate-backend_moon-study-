const mongoose = require('mongoose');

module.exports = () => {
    const connect = () => {

        //1. 개발 환경이 아닐 때 몽구스가 생성하는 쿼리 내용을 콘솔을 통해 확인할 수 있는 부분
        if(process.env.NODE_ENV !== 'production') {
            mongoose.set('debug', true);
        }

        //2. 몽구스와 몽고디비를 연결하는 부분으로 몽고디비 주소로 접속을 시도한다.
        mongoose.connect("mongodb+srv://moon:1234@cluster0.k8htexd.mongodb.net/test", { 
            useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => console.log('몽고디비 연결 성공'))
            .catch(e => console.error('몽고디비 연결 에러', e));

        //3. 몽구스 커낵션 이벤트 리스너. 에러 발생 시 에러 내용을 기록하고, 연결 종료 시 재연결을 시도한다.
        mongoose.connection.on('error', (error) => {
            console.error('몽고디비 연결 에러', error);
        });

        mongoose.connection.on('disconnected', () => {
            console.error('몽고디비 연결이 끊겼습니다. 재연결을 시도합니다.');
            connect();
        });

        //4. User 스키마와 Comment 스키마를 연결하는 부분
        require('./user');
        require('./comment');
    }
}