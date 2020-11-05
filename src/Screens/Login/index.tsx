import React, { useContext, useEffect } from 'react';
import Styled from 'styled-components/native';
import { Linking } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { StackNavigationProp } from '@react-navigation/stack';

import { UserContext } from '~/Context/User';

import Input from '~/Components/Input';
import Button from '~/Components/Button';

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #141414;
  align-items: center;
  justify-content: center;
`;
const FormContainer = Styled.View`
  width: 100%;
  padding: 40px;
`;

const PasswordReset = Styled.Text`
  width: 100%;
  font-size: 12px;
  color: #FFFFFF;
  text-align: center;
`;

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Login'>;
interface Props {
    navigation: NavigationProp;
}

const Login = ({ navigation }: Props) => {
    const { login } = useContext<IUserContext>(UserContext);

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <Container>
            <FormContainer>
                <Input style={{ marginBottom: 16 }} placeholder="이메일" />
                <Input
                    style={{ marginBottom: 16 }}
                    placeholder="비밀번호"
                    secureTextEntry={true}
                />
                <Button
                    style={{ marginBottom: 24 }}
                    label="로그인"
                    onPress={() => {
                        login('dev.yakuza@gmail.com', 'password');
                    }}
                />
                <PasswordReset
                    onPress={() => {
                        Linking.openURL('https://dev-yakuza.github.io/ko/');
                    }}>
                    비밀번호 재설정
        </PasswordReset>
            </FormContainer>
        </Container>
    );
};

export default Login;

//SplashScreen이라는 라이브러리를 통해 스플래시 이미지를 네이티브 코드를 사용하여 화면에 표시
//Login 컴포넌트는 이렇게 표시한 스플래시 이미지를 닫기 위해 useEffect를 사용하여 컴포넌트가 화면에 표시된 이후
//SplashScreen의 hide함수를 호출