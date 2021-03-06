//    Copyright 2017 XieJinChi ChenYiXiu
// 
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
// 
//        http://www.apache.org/licenses/LICENSE-2.0
// 
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

'use strict'  // Operate in Strict mode such that variables must be declared before used!


function DirectionKeyObj() {

}
gEngine.Core.inheritPrototype(DirectionKeyObj, GameObject)

DirectionKeyObj.prototype.keyControl = function () {
    var xform = this.getXform()
    let rigidbody = this.getRigidBody()
    let Acc = this.mAcc
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.I)) {
        // xform.incYPosBy(kWASDDelta);
        rigidbody.setYAcceleration(Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.I)){
        rigidbody.setYAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.K)) {
        rigidbody.setYAcceleration(-Acc)
    } 
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.K)){
        rigidbody.setYAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.J)) {
        rigidbody.setXAcceleration(-Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.J)){
        rigidbody.setXAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.L)) {
        rigidbody.setXAcceleration(Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.L)){
        rigidbody.setXAcceleration(0)
    }
    
    rigidbody.mAngularVelocity = rigidbody.mAngularVelocity * this.mRotFric
    rigidbody.mVelocity[0] = rigidbody.mVelocity[0] * this.mMoveFric
    rigidbody.mVelocity[1] = rigidbody.mVelocity[1] * this.mMoveFric
    //vec2.scale(rigidbody.mVelocity,0.1,0.1)
}

DirectionKeyObj.prototype.inverseKeyControl = function () {
    var xform = this.getXform()
    let rigidbody = this.getRigidBody()
    let Acc = -this.mAcc
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.I)) {
        // xform.incYPosBy(kWASDDelta);
        rigidbody.setYAcceleration(Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.I)){
        rigidbody.setYAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.K)) {
        rigidbody.setYAcceleration(-Acc)
    } 
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.K)){
        rigidbody.setYAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.J)) {
        rigidbody.setXAcceleration(-Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.J)){
        rigidbody.setXAcceleration(0)
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.L)) {
        rigidbody.setXAcceleration(Acc)
    }
    if(gEngine.Input.isKeyReleased(gEngine.Input.keys.L)){
        rigidbody.setXAcceleration(0)
    }
    
    rigidbody.mAngularVelocity = rigidbody.mAngularVelocity * this.mRotFric
    rigidbody.mVelocity[0] = rigidbody.mVelocity[0] * this.mMoveFric
    rigidbody.mVelocity[1] = rigidbody.mVelocity[1] * this.mMoveFric
    //vec2.scale(rigidbody.mVelocity,0.1,0.1)
}