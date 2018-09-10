//
//  ImagePicker.h
//  WeexDemo
//
//  Created by Crazyhuiliang on 2018/9/10.
//  Copyright © 2018年 taobao. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIImagePickerController.h>
#import <WeexSDK/WeexSDK.h>

@interface ImagePicker : NSObject<WXModuleProtocol, UINavigationControllerDelegate, UIImagePickerControllerDelegate>

@property WXModuleKeepAliveCallback callback;

@end
