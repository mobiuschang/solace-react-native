package com.reactnativeeverywhere;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.horcrux.svg.SvgPackage;
import com.rnim.rn.audio.ReactNativeAudioPackage;
import com.cmcewen.blurview.BlurViewPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
<<<<<<< HEAD
=======
            new LinearGradientPackage(),
>>>>>>> master
            new RNSpinkitPackage(),
            new SvgPackage(),
            new ReactNativeAudioPackage(),
            new BlurViewPackage(),
            new VectorIconsPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
