interface IUserInfo {
    name: string;
    email: string;
}

interface IUserContext {
    isLoading: boolean;
    userInfo: IUserInfo | undefined;
    login: (email: string, password: string) => void;
    getUserInfo: () => void;
    logout: () => void;
}

//userContext는 데이터를 불러왔는지 여부를 확인하기 위한 isLoading 변수와 사용자 정보가 있는 userInfo 변수를
//가지고있으며 로그인과 로그아웃을 처리하기 위한 함수 사용자 정보를 가져올 수 있는 getUserInfo 함수를 포함

//사용자 이름과 이메일 주소를 갖는 서비스라고 가정하고 제작할 예정
//실제데이터를 조작하기 위한 UserContext를 만들기 위해 ./src/Context/User/index.tsx 파일을 만든다