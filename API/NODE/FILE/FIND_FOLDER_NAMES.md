# `METHOD` FIND_FOLDER_NAMES
지정된 경로에 위치한 폴더들의 이름 목록을 불러옵니다.

## Parameters
* `REQUIRED` *pathOrParams*
* `REQUIRED` *pathOrParams.path* 폴더들이 위치한 경로
* `OPTIONAL` *pathOrParams.isSync* true로 설정하면 callback을 실행하지 않고 즉시 실행하여 결과를 반환합니다. 이 설정은 명령이 끝날때 까지 프로그램이 멈추게 되므로 필요한 경우에만 사용합니다.
* `OPTIONAL` *callbackOrHandlers*
* `OPTIONAL` *callbackOrHandlers.notExistsHandler*
* `OPTIONAL` *callbackOrHandlers.error*
* `OPTIONAL` *callbackOrHandlers.success*
