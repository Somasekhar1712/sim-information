import Foundation

@objc public class Siminfo: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
