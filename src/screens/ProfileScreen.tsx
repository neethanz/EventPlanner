import {CircleAvathar, CustomButton, CustomInput} from '@/components/atoms';
import {ProfileHeader} from '@/components/molecules';
import {com_styles} from '@/utils';
import {profileSchema} from '@/validations/validation_schema';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {AVATHAR_URL} from '@env';

function ProfileScreen() {
  const {
    control,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      mailing_address: '',
    },
    resolver: yupResolver(profileSchema),
  });
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={com_styles.page_container}>
          <ProfileHeader />
          <View style={{alignSelf: 'center'}}>
            <CircleAvathar width={96} url={AVATHAR_URL} />
          </View>

          <CustomInput
            control={control}
            errors={errors.first_name}
            placeHolder={'Jane'}
            name={'first_name'}
            label={'First Name'}
          />
          <CustomInput
            control={control}
            errors={errors.last_name}
            placeHolder={'Cooper'}
            name={'last_name'}
            label={'Last Name'}
          />

          <CustomInput
            control={control}
            errors={errors.email}
            placeHolder={'Jane.c@gmail.com'}
            name={'email'}
            label={'Email'}
          />

          <CustomInput
            control={control}
            errors={errors.phone_number}
            placeHolder={'02 9371 9090'}
            name={'phone_number'}
            label={'Phone Number'}
          />
          <CustomInput
            control={control}
            errors={errors.mailing_address}
            placeHolder={'colombo 07'}
            name={'mailing_address'}
            label={'Mailing Address'}
          />

          <CustomButton text={'Edit'} onPress={handleSubmit(console.log)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileScreen;
